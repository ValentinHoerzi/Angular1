package Main.businesslogic;

import Main.data.Employee;
import Main.data.EmployeeEntity;
import Main.database.EmployeeRepository;
import Main.exceptions.EmployeeNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class EmployeeBusinesslogicComponent {

    @Autowired
    private EmployeeRepository db;

    public List<Employee> getEmployees() {
        List<Employee> employees = new ArrayList<>();
        for (EmployeeEntity entity : db.findAll()) {
            employees.add(convertEmployeeEntityToEmployee(entity));
        }
        return employees;
    }

    public Employee getEmployeeById(Integer id) {
        EmployeeEntity employee = findEmployeeById(id);
        return convertEmployeeEntityToEmployee(employee);
    }

    public Employee addEmployees(Employee employee) {
        EmployeeEntity entity = convertEmployeeToEmployeeEntity(employee);
        EmployeeEntity saved = db.save(entity);
        return convertEmployeeEntityToEmployee(saved);
    }

    public Employee updateEmployee(Integer id, Employee employee) {
        EmployeeEntity updatedEmployee = createdUpdatedEmployee(id, employee);
        EmployeeEntity save = db.save(updatedEmployee);
        return convertEmployeeEntityToEmployee(save);
    }

    public String deleteEmployee(Integer id) {
        EmployeeEntity employee = findEmployeeById(id);
        db.deleteById(employee.getId());
        return employee.getName();
    }

    public EmployeeEntity findEmployeeById(Integer id) {
        return db.findById(id).orElseThrow(() -> new EmployeeNotFoundException(String.format("Employee with id %d not found", id)));
    }

    private Employee convertEmployeeEntityToEmployee(EmployeeEntity entity) {
        Employee employee = new Employee();

        employee.setId(entity.getId());
        employee.setName(entity.getName());
        employee.setLongitude(entity.getLongitude());
        employee.setLatitude(entity.getLatitude());

        return employee;
    }

    private EmployeeEntity convertEmployeeToEmployeeEntity(Employee employee) {
        EmployeeEntity entity = new EmployeeEntity();

        entity.setId(null);
        entity.setName(employee.getName());
        entity.setLongitude(employee.getLongitude());
        entity.setLatitude(employee.getLatitude());

        return entity;
    }

    private EmployeeEntity createdUpdatedEmployee(Integer id, Employee employee) {
        EmployeeEntity updatedEmployee = new EmployeeEntity();

        updatedEmployee.setId(id);
        updatedEmployee.setName(employee.getName());
        updatedEmployee.setLatitude(employee.getLatitude());
        updatedEmployee.setLongitude(employee.getLongitude());

        return updatedEmployee;
    }
}
