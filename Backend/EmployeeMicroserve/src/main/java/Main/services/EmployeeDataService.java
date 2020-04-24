package Main.services;

import Main.Exceptions.EmployeeBadRequestException;
import Main.businesslogic.EmployeesLogic;
import Main.data.Employee;
import Main.data.EmployeeDTO;
import Main.data.EmployeeResource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class EmployeeDataService {

    @Autowired
    private EmployeesLogic _service;

    public List<EmployeeResource> getEmployees() {
        return _service.getEmployees()
                .stream()
                .map(this::convertEmployeeToEmployeeResource)
                .collect(Collectors.toList());
    }

    public EmployeeResource addEmployee(EmployeeDTO employeeDto) {
        Employee emp = convertEmployeeDTOtoEmployee(employeeDto);
        Employee result = _service.addEmployees(emp);
        return convertEmployeeToEmployeeResource(result);
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
