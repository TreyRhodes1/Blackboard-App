package project.school.blackboard.models;

import java.util.HashMap;

public class User {
    private String id;
    private String userName;
    private String studentId;
    private String educationLevel;
    private String gender;
    private String[] institutionRoleIds;
    private String[] systemRoleIds;
    private HashMap<String, String> name;
    private HashMap<String, String> contact;

    public User(String id, String userName, String studentId, String educationLevel, String gender,
                String[] institutionRoleIds, String[] systemRoleIds, HashMap<String, String> name,
                HashMap<String, String> contact) {
        this.id = id;
        this.userName = userName;
        this.studentId = studentId;
        this.educationLevel = educationLevel;
        this.gender = gender;
        this.institutionRoleIds = institutionRoleIds;
        this.systemRoleIds = systemRoleIds;
        this.name = name;
        this.contact = contact;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getEducationLevel() {
        return educationLevel;
    }

    public void setEducationLevel(String educationLevel) {
        this.educationLevel = educationLevel;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String[] getInstitutionRoleIds() {
        return institutionRoleIds;
    }

    public void setInstitutionRoleIds(String[] institutionRoleIds) {
        this.institutionRoleIds = institutionRoleIds;
    }

    public String[] getSystemRoleIds() {
        return systemRoleIds;
    }

    public void setSystemRoleIds(String[] systemRoleIds) {
        this.systemRoleIds = systemRoleIds;
    }

    public HashMap<String, String> getName() {
        return name;
    }

    public void setName(HashMap<String, String> name) {
        this.name = name;
    }

    public HashMap<String, String> getContact() {
        return contact;
    }

    public void setContact(HashMap<String, String> contact) {
        this.contact = contact;
    }
}
