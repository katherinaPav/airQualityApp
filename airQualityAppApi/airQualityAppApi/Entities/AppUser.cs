﻿namespace airQualityAppApi.Entities
{
    public class AppUser
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public required string Username { get; set; }
        public required string Email { get; set; }
    }
}
