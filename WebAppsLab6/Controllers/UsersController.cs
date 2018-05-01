using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebAppsLab6.Data;
using WebAppsLab6.DTOs;
using WebAppsLab6.Models;

namespace WebAppsLab6.Controllers
{
    [Produces("application/json")]
    [Route("api/Users")]
    //[Authorize]
    public class UsersController : Controller
    {
        private readonly IUserRepository _repo;
        private readonly IMapper _mapper;

        public UsersController(IUserRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("/api/users/{id}")]
        public async Task<UserDetailsDTO> GetUser(int id)
        {
            var user = await _repo.GetUser(id);
            var userDetails = _mapper.Map<UserDetailsDTO>(user);
            return userDetails;
            
        }

        [HttpGet]
        [Route("/api/users/users")]
        public async Task<IEnumerable<UserBriefDTO>> GetUsers()
        {
            var users = await _repo.GetUsers();
            var allUsersDetails = _mapper.Map<IEnumerable<UserBriefDTO>>(users);
            return allUsersDetails;
        }

        [HttpPut]
        [Route("/api/users/updateuser/{id}")]
        public async Task<IActionResult> UpdateUser(int id, [FromBody] UpdateUserDTO updatedUser)
        {
            var user = await _repo.GetUser(id);
            user = _mapper.Map(updatedUser, user);
            await _repo.SaveAll();
            return NoContent();

        }
    }
}