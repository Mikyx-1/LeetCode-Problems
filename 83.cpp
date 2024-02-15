// 83. Remove Duplicates from Sorted List
// Tested successfully

#include <iostream>
#include <vector>


class Node {
public:
    int value;
    Node* next = nullptr;

    // Constructor
    Node(int value): value(value) {}
};

class CreateLinkedList{
    public:
        CreateLinkedList(std::vector<int> list): list(list)
        {
            length = list.size();
            head = new Node(list[0]);
            Node* temp = head;
            for (int i = 1; i < length; i++)
            {
                temp->next = new Node(list[i]);
                temp = temp->next;
            }
        }

        std::vector<int> list;
        int length;
        Node* head;
};

Node* RemoveDuplicate(Node* head)
{
    Node* curr_temp = head->next;
    Node* last_temp = head;
    while(curr_temp != nullptr)
    {
        if(curr_temp->value == last_temp->value)
        {
            curr_temp = curr_temp->next;
            last_temp->next = curr_temp;
        }
        else{
            last_temp = curr_temp;
            curr_temp = curr_temp->next;
        }
    }
    return head;
}

void print(Node* head)
{
    Node* temp = head;
    while(temp != nullptr)
    {
        std::cout << temp->value << " ";
        temp = temp->next;
    }
    std::cout << std::endl;
}

int main()
{
    std::vector<int> listA = {1, 1, 2}, listB = {1, 1, 2, 3, 3};

    CreateLinkedList LLA(listA), LLB(listB);

    Node* linked_list_a = LLA.head;
    Node* linked_list_b = LLB.head;

    Node* removed_duplicate_1 = RemoveDuplicate(linked_list_a);
    Node* removed_duplicate_2 = RemoveDuplicate(linked_list_b);
    print(removed_duplicate_1);
    print(removed_duplicate_2);


    return 1;
}