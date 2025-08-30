using airQualityAppApi.Entities;

namespace airQualityAppApi.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);  // it returns a string

    }
}
