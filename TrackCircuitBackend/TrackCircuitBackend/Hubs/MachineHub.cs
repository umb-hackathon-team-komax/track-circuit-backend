using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;
using TrackCircuitBackend.Services;

namespace TrackCircuitBackend.Hubs
{
    public class MachineHub : Hub
    {
        private IMachineService MachineService { get; }
        public MachineHub(IMachineService machineService)
        {
            MachineService = machineService;
        }
        public void Fetch()
        {
            Clients.All.SendAsync("received", MachineService.MockData());
        }
    }
}
