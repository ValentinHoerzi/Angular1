package Main.data;

import lombok.Data;

@Data
public class ServiceResource {
    private Integer id;
    private String name;
    private String date;
    private String longitude;
    private String latitude;
    private Integer employeeId;
}
