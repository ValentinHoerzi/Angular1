package Main.data;

import lombok.Data;

import java.util.Date;

@Data
public class Service {
    private Integer id;
    private String name;
    private Date date;
    private String longitude;
    private String latitude;
    private Integer employeeId;
}
