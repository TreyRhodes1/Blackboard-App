package project.school.blackboard;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import project.school.blackboard.models.Course;
import project.school.blackboard.models.CourseRepository;

import java.time.Instant;
import java.util.Collections;
import java.util.stream.Stream;

@Component
class Initializer implements CommandLineRunner {

    private final CourseRepository repository;

    public Initializer(CourseRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) {
//        RestTemplate restTemplate = new RestTemplate();

        Stream.of("test1", "test2", "test3", "test4")
                .forEach(name ->
                repository.save(new Course(name))
        );

        Course test = repository.findByName("test1");
        repository.save(test);

        repository.findAll().forEach(System.out::println);
    }
}