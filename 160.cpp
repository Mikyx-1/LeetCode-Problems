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

void intersectionOf2LinknedList(CreateLinkedList LL_A, CreateLinkedList LL_B, int skipA, int skipB, int intersectVal)
{
    int valAtSkipA, valAtSkipB;
    Node* nodeA = LL_A.head;
    Node* nodeB = LL_B.head;

    int maxSkip = std::max(skipA, skipB);
    for (int i = 0; i<LL_A.length; i++)
    {
        if (i == skipA)
        {
            valAtSkipA = nodeA->value;
        }
        nodeA = nodeA->next;
    }
    for (int i = 0; i < LL_B.length; i++)
    {
        if (i == skipB)
        {
            valAtSkipB = nodeB->value;
        }
        nodeB = nodeB->next;
    }

    if (valAtSkipA == valAtSkipB && valAtSkipA == intersectVal) std::cout << "Intersected at " << intersectVal << std::endl;

    else std::cout << "No intersection" << std::endl;
}

int main()
{

    std::vector<int> listA = {2, 6, 4};
    std::vector<int> listB = {1, 5};
    int intersectVal = 0;
    int skipA = 3;
    int skipB = 2;

    CreateLinkedList LL_A(listA);
    CreateLinkedList LL_B(listB);

    intersectionOf2LinknedList(LL_A, LL_B, skipA, skipB, intersectVal);

    return 1;
}