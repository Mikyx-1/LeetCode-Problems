// Test version
#include <iostream>
#include <thread>
#include <mutex>
#include <condition_variable>
#include <vector>

class Foo {
private:
	std::mutex mtx; // Need some examples
	std::condition_variable cv; // Need some examples
	int flag = 1;

public:
	void first()
	{
		std::unique_lock<std::mutex> lock(mtx);  // Need some examples
		cv.wait(lock, [this] { return flag == 1; }); // Need some examples
		std::cout << "First";
		flag = 2;
		cv.notify_all();
	}

	void second()
	{
		std::unique_lock<std::mutex> lock(mtx);
		cv.wait(lock, [this] {return flag == 2;});
		std::cout << "Second";
		flag = 3;
		cv.notify_all();
	}

	void third()
	{
		std::unique_lock<std::mutex> lock(mtx);
		cv.wait(lock, [this] {return flag == 3;});
		std::cout << "Third";
		flag = 1;
		cv.notify_all();
	}
};


int main()
{
	Foo foo;
	std::vector<int> nums = { 3, 2, 1 };

	std::thread t1([&foo]() {foo.first();});
	std::thread t2([&foo]() {foo.second();});
	std::thread t3([&foo]() {foo.third();});

	t1.join();
	t2.join();
	t3.join();

	return 1;
}
