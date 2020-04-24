package Main.controller;

import Main.data.EmployeeDTO;
import Main.data.EmployeeResource;
import Main.services.EmployeeDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/employeeMicroservice")
public class EmployeesController {

    @Autowired
    private EmployeeDataService _service;

    @RequestMapping(method = RequestMethod.GET, value = "/employees")
    public List<EmployeeResource> getEmployees() {
        return _service.getEmployees();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/employees")
    public EmployeeResource addEmployee(@RequestBody EmployeeDTO employeeDto) {
        return _service.addEmployee(employeeDto);
    }
}
