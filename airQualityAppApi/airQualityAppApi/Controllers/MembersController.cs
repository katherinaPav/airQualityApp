using airQualityAppApi.Data;
using airQualityAppApi.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace airQualityAppApi.Controllers
{
    
    public class MembersController(AppDbContext context) : BaseApiController
    {
        [HttpGet] // Http get request that returns all members
        public async Task<ActionResult<IReadOnlyList<AppUser>>> GetMembers()
        {
            var members = await context.Users.ToListAsync();

            return members;
        }

        [Authorize]
        [HttpGet("{id}")] // Http get request that returns a single member by their id
        public async Task<ActionResult<AppUser>> GetMember(string id)
        {
            var member = await context.Users.FindAsync(id);

            if (member == null) return NotFound();

            return member;

        }
    }
}
