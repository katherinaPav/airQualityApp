using airQualityAppApi.DTOs;
using airQualityAppApi.Entities;
using airQualityAppApi.Interfaces;

namespace airQualityAppApi.Extensions
{
    public static class AppUserExtensions
    {
        public static UserDto ToDto(this AppUser user, ITokenService tokenService)
        {
            return new UserDto
            {
                Id = user.Id,
                Username = user.Username,
                Email = user.Email,
                Token = tokenService.CreateToken(user)
            };
        }
    }
}
