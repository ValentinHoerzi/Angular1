package Main.services;

import Main.businesslogic.ServiceBusinesslogicComponent;
import Main.data.Service;
import Main.data.ServiceDTO;
import Main.data.ServiceResource;
import Main.exceptions.ServiceBadRequestException;
import org.springframework.beans.factory.annotation.Autowired;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.stream.Collectors;

@org.springframework.stereotype.Service
public class ServiceDataService {

    private final SimpleDateFormat sdf = new SimpleDateFormat("dd.MM.yyyy hh:mm");

    @Autowired
    private ServiceBusinesslogicComponent _service;

    public List<ServiceResource> getServices() {
        return _service.getServices()
                .stream()
                .map(this::convertServiceToServiceResource)
                .collect(Collectors.toList());
    }

    public ServiceResource getServiceById(Integer id) {
        return convertServiceToServiceResource(_service.getServiceById(id));
    }

    public ServiceResource addService(ServiceDTO serviceDTO) throws ParseException {
        Service service = convertServiceDTOtoService(serviceDTO);

        Service saved = _service.addService(service);
        return convertServiceToServiceResource(saved);
    }

    public ServiceResource updateService(Integer id, ServiceDTO serviceDTO) throws ParseException {
        Service service = convertServiceDTOtoService(serviceDTO);
        return convertServiceToServiceResource(_service.updateService(id, service));
    }

    public String deleteService(Integer id) {
        return _service.deleteServiceById(id);
    }

    public String getAddressOfServiceById(Integer id) {
        return _service.getAddressOfServiceById(id);
    }

    public ServiceResource convertServiceToServiceResource(Service service) {
        ServiceResource e = new ServiceResource();

        e.setId(service.getId());
        e.setName(service.getName());
        e.setDate(sdf.format(service.getDate()));
        e.setLongitude(service.getLongitude());
        e.setLatitude(service.getLatitude());
        e.setEmployeeId(service.getEmployeeId());

        return e;
    }

    public Service convertServiceDTOtoService(ServiceDTO serviceDTO) throws ParseException {
        checkServiceEntityDTO(serviceDTO);
        Service result = new Service();

        result.setName(serviceDTO.getName());
        result.setDate(sdf.parse(serviceDTO.getDate()));
        result.setLongitude(serviceDTO.getLongitude());
        result.setLatitude(serviceDTO.getLatitude());
        result.setEmployeeId(serviceDTO.getEmployeeId());

        return result;
    }

    private void checkServiceEntityDTO(ServiceDTO serviceDTO) {
        if (serviceDTO.getName().length() <= 4)
            throw new ServiceBadRequestException("Name length must be > 4");
        if (isNullOrEmpty(serviceDTO.getName()))
            throw new ServiceBadRequestException("Name must not be null or empty");
        if (isNullOrEmpty(serviceDTO.getDate()))
            throw new ServiceBadRequestException("Date must not be null or empty");
        if (serviceDTO.getName().length() <= 5)
            throw new ServiceBadRequestException("Address length must be > 5");
        if (serviceDTO.getEmployeeId() == null || serviceDTO.getEmployeeId() <= 0)
            throw new ServiceBadRequestException("Employee_id must exist");
        try {
            sdf.parse(serviceDTO.getDate());
        } catch (ParseException e) {
            throw new ServiceBadRequestException("Date must be in format dd.mm.yyyy hh:MM");
        }
    }

    private boolean isNullOrEmpty(String string) {
        return string == null || string.equals("");
    }
}
