package Main.controller;

import Main.data.ServiceDTO;
import Main.data.ServiceResource;
import Main.services.ServiceDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/serviceMicroservice")
public class ServicesController {

    @Autowired
    private ServiceDataService _service;

    @RequestMapping(method = RequestMethod.GET, value = "/services")
    public List<ServiceResource> getServices() {
        return _service.getServices();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/services/{id}")
    public ServiceResource getServiceById(@PathVariable Integer id) {
        return _service.getServiceById(id);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/services")
    public ServiceResource addService(@RequestBody ServiceDTO serviceDTO) throws ParseException {
        return _service.addService(serviceDTO);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/services/{id}")
    public ServiceResource updateService(@PathVariable Integer id, @RequestBody ServiceDTO serviceDTO) throws ParseException {
        return _service.updateService(id, serviceDTO);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/services/{id}")
    public String deleteService(@PathVariable Integer id) {
        return _service.deleteService(id);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/services/{id}/address")
    public String getAddressOfServiceById(@PathVariable Integer id) {
        return _service.getAddressOfServiceById(id);
    }
}
