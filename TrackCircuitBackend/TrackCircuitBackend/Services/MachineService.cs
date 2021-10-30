using System;

namespace TrackCircuitBackend.Services
{
    public class MachineService : IMachineService
    {
        public int MockData()
        {
            Random rand = new();
            return rand.Next(0, 20);
        }
    }
}
