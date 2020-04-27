package Main.services;

import Main.businesslogic.EmployeeBusinesslogicComponent;
import Main.data.Employee;
import Main.data.EmployeeDTO;
import Main.data.EmployeeResource;
import Main.exceptions.EmployeeBadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeDataService {

    @Autowired
    private EmployeeBusinesslogicComponent _service;

    public List<EmployeeResource> getEmployees() {
        return _service.getEmployees()
                .stream()
                .map(this::convertEmployeeToEmployeeResource)
                .collect(Collectors.toList());
    }

    public EmployeeResource getEmployeeById(Integer id) {
        return convertEmployeeToEmployeeResource(_service.getEmployeeById(id));
    }

    public EmployeeResource addEmployee(EmployeeDTO employeeDto) {
        Employee emp = convertEmployeeDTOtoEmployee(employeeDto);
        Employee result = _service.addEmployees(emp);
        return convertEmployeeToEmployeeResource(result);
    }

    public EmployeeResource updateEmployee(Integer id, EmployeeDTO employeeDto) {
        return convertEmployeeToEmployeeResource(_service.updateEmployee(id, convertEmployeeDTOtoEmployee(employeeDto)));
    }

    public String deleteEmployee(Integer id) {
        return _service.deleteEmployee(id);
    }

    public EmployeeResource convertEmployeeToEmployeeResource(Employee employee) {
        EmployeeResource result = new EmployeeResource();

        result.setId(employee.getId());
        result.setLatitude(employee.getLatitude());
        result.setLongitude(employee.getLongitude());
        result.setName(employee.getName());

        return result;
    }

    public Employee convertEmployeeDTOtoEmployee(EmployeeDTO employeeDTO) {
        checkEmployeeDTO(employeeDTO);
        Employee employee = new Employee();

        employee.setLatitude(employeeDTO.getLatitude());
        employee.setLongitude(employeeDTO.getLongitude());
        employee.setName(employeeDTO.getName());

        return employee;
    }

    private void checkEmployeeDTO(EmployeeDTO employeeDTO) {
        if (employeeDTO.getName().length() <= 4)
            throw new EmployeeBadRequestException("The name must at least have a length of 5");
        if (isNullOrEmpty(employeeDTO.getName()))
            throw new EmployeeBadRequestException("The name must not be empty");
        if (isNullOrEmpty(employeeDTO.getLatitude()))
            throw new EmployeeBadRequestException("The latitude must not be empty");
        if (isNullOrEmpty(employeeDTO.getLongitude()))
            throw new EmployeeBadRequestException("The longitude must not be empty");
    }

    private boolean isNullOrEmpty(String string) {
        return string == null || string.equals("");
    }
}
