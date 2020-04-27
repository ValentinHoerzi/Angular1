package Main.businesslogic;


import Main.data.Service;
import Main.data.ServiceEntity;
import Main.database.ServiceRepository;
import Main.exceptions.ServiceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import sun.reflect.generics.reflectiveObjects.NotImplementedException;

import java.util.ArrayList;
import java.util.List;


@Component
public class ServiceBusinesslogicComponent {

    @Autowired
    private ServiceRepository db;

    public List<Service> getServices() {
        List<Service> services = new ArrayList<>();
        for (ServiceEntity entity : db.findAll()) {
            services.add(convertServiceEntityToService(entity));
        }
        return services;
    }

    public Service addService(Service service) {
        ServiceEntity entity = convertServiceToServiceEntity(service);
        ServiceEntity serviceEntity = db.save(entity);
        return convertServiceEntityToService(serviceEntity);
    }

    public Service getServiceById(Integer id) {
        ServiceEntity service = findServiceById(id);
        return convertServiceEntityToService(service);
    }

    public Service updateService(Integer id, Service e) {
        ServiceEntity updatedEntity = createUpdatedService(id, e);
        ServiceEntity save = db.save(updatedEntity);
        return convertServiceEntityToService(save);
    }

    public String deleteServiceById(Integer id) {
        ServiceEntity service = findServiceById(id);
        db.delete(service);
        return service.getName();
    }

    public String getAddressOfServiceById(Integer id) {
        throw new NotImplementedException();
    }

    private ServiceEntity findServiceById(Integer id) {
        return db.findById(id).orElseThrow(() -> new ServiceNotFoundException(String.format("Service with the id %d not found", id)));
    }

    private ServiceEntity convertServiceToServiceEntity(Service service) {
        ServiceEntity serviceEntity = new ServiceEntity();

        serviceEntity.setName(service.getName());
        serviceEntity.setDate(service.getDate());
        serviceEntity.setLatitude(service.getLatitude());
        serviceEntity.setLongitude(service.getLongitude());
        serviceEntity.setEmployeeId(service.getEmployeeId());

        return serviceEntity;
    }

    private Service convertServiceEntityToService(ServiceEntity entity) {
        Service service = new Service();

        service.setId(entity.getId());
        service.setName(entity.getName());
        service.setDate(entity.getDate());
        service.setLongitude(entity.getLongitude());
        service.setLatitude(entity.getLatitude());
        service.setEmployeeId(entity.getEmployeeId());

        return service;
    }

    private ServiceEntity createUpdatedService(Integer id, Service e) {
        ServiceEntity updatedService = new ServiceEntity();

        updatedService.setId(id);
        updatedService.setName(e.getName());
        updatedService.setDate(e.getDate());
        updatedService.setLongitude(e.getLongitude());
        updatedService.setLatitude(e.getLatitude());
        updatedService.setEmployeeId(e.getEmployeeId());

        return updatedService;
    }
}
