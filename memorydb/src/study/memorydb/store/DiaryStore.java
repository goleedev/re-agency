package study.memorydb.store;
import java.util.List;

public interface MemoryStore {

    void save(int month, int date, int year, String text);
    List<String> findAll();
    String find(int month, int date, int year);
    void delete(int month, int date, int year);
    
}
