package project.school.blackboard.models;

import java.util.HashMap;

public class Course {
    private String id;
    private String courseId;
    private String name;
    private String description;
    private boolean organization;
    private String ultraStatus;
    private boolean readOnly;
    private String termId;
    private HashMap<String, Object> availability;

    public Course(String id, String courseId, String name, String description, boolean organization,
                  String ultraStatus, boolean readOnly, String termId, HashMap<String, Object> availability) {
        this.id = id;
        this.courseId = courseId;
        this.name = name;
        this.description = description;
        this.organization = organization;
        this.ultraStatus = ultraStatus;
        this.readOnly = readOnly;
        this.termId = termId;
        this.availability = availability;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCourseId() {
        return courseId;
    }

    public void setCourseId(String courseId) {
        this.courseId = courseId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isOrganization() {
        return organization;
    }

    public void setOrganization(boolean organization) {
        this.organization = organization;
    }

    public String getUltraStatus() {
        return ultraStatus;
    }

    public void setUltraStatus(String ultraStatus) {
        this.ultraStatus = ultraStatus;
    }

    public boolean isReadOnly() {
        return readOnly;
    }

    public void setReadOnly(boolean readOnly) {
        this.readOnly = readOnly;
    }

    public String getTermId() {
        return termId;
    }

    public void setTermId(String termId) {
        this.termId = termId;
    }

    public HashMap<String, Object> getAvailability() {
        return availability;
    }

    public void setAvailability(HashMap<String, Object> availability) {
        this.availability = availability;
    }
}
