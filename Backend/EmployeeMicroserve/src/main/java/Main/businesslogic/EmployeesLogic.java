package Main.businesslogic;

import Main.data.Employee;
import Main.data.EmployeeEntity;
import Main.database.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeesLogic {

    @Autowired
    EmployeeRepository db;

    public List<Employee> getEmployees() {
        List<Employee> employees = new ArrayList<>();
        for(EmployeeEntity entity : db.findAll()){
            employees.add(convertEmployeeEntityToEmployee(entity));
        }
        return employees;
    }


    public Employee addEmployees(Employee employee) {
        EmployeeEntity entity = convertEmployeeToEmployeeEntity(employee);
        EmployeeEntity saved = db.save(entity);
        return convertEmployeeEntityToEmployee(saved);
    }

    public Employee convertEmployeeEntityToEmployee(EmployeeEntity entity) {
        Employee employee = new Employee();

        employee.setId(entity.getId());
        employee.setName(entity.getName());
        employee.setLongitude(entity.getLongitude());
        employee.setLatitude(entity.getLatitude());

        return employee;
    }

    private EmployeeEntity convertEmployeeToEmployeeEntity(Employee employee){
        EmployeeEntity entity = new EmployeeEntity();

        entity.setId(null);
        entity.setName(employee.getName());
        entity.setLongitude(employee.getLongitude());
        entity.setLatitude(employee.getLatitude());

        return entity;
    }
}
