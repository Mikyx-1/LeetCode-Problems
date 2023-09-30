# 134: Gas Station
# not done

gas1 = [1, 2, 3, 4, 5]
cost1 = [3, 4, 5, 1, 2]

gas2 = [2, 3, 4]
cost2 = [3, 4, 3]


def gasStation(gas, cost):

    bestStartIdx = 0
    def canTravel(start_idx, idx, currentGas):
        if currentGas + gas[idx] - cost[idx] >= 0 and idx == start_idx:
            bestStartIdx = start_idx
            return
        
        if currentGas + gas[idx] - cost[idx] < 0:
            if start_idx == len(gas)-1:
                bestStartIdx = -1
            return
        
        
        if(idx+1 >= len(gas)):
            canTravel(start_idx, 0, currentGas + gas[idx] - cost[idx])
        else:
            canTravel(start_idx, idx+1, currentGas + gas[idx] - cost[idx])

    for i in range(len(gas)):
        canTravel(i, i, 0)
    return bestStartIdx

print(gasStation(gas1, cost1))
        
    
        