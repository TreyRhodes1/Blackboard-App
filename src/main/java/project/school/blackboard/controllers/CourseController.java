package project.school.blackboard.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project.school.blackboard.models.Course;
import project.school.blackboard.models.CourseRepository;

import java.util.Collection;

@RestController
@RequestMapping("/api")
public class CourseController {
    private final Logger log = LoggerFactory.getLogger(CourseController.class);
    private CourseRepository courseRepository;

    public CourseController(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    @GetMapping("/courses")
    Collection<Course> courses() {
        return courseRepository.findAll();
    }
}
