using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using WebAppsLab6.Models;

namespace WebAppsLab6.Data
{
    public class UserRepository : IUserRepository
    {

        private readonly DataContext _context;

        public UserRepository(DataContext context)
        {
            _context = context;
        }

        public async void Add<T>(T entity) where T : class
        {
           await _context.AddAsync(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<User> GetUser(int id)
        {
            var user = await _context.Users.SingleOrDefaultAsync(u => u.ID == id);
            user.Photos.Append(await _context.Photos.SingleOrDefaultAsync(p => p.UserId == user.ID));
            return user;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await _context.Users.ToListAsync();
            foreach(User u in users)
            {
                u.Photos.Append(await _context.Photos.SingleOrDefaultAsync(p => p.UserId == u.ID));
            }
            return users;
        }

        public async Task<bool> SaveAll()
        {
            var numSaved = await _context.SaveChangesAsync();
            return numSaved > 0;
        }
    }
}
