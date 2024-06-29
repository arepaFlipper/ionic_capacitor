def move_robot(x, y, instructions, orientation):
    for char in instructions:
        if char == "L":
            if orientation == "north":
                orientation = "west"
            elif orientation == "west":
                orientation = "south"
            elif orientation == "south":
                orientation = "east"
            elif orientation == "east":
                orientation = "north"
        elif char == "R":
            if orientation == "north":
                orientation = "east"
            elif orientation == "west":
                orientation = "north"
            elif orientation == "south":
                orientation = "east"
            elif orientation == "south":
                orientation = "west"
            
        elif char == "A":
            if orientation == "north":
                y+=1
            elif orientation == "west":
                x-=1
            elif orientation == "east":
                x+=1
            elif orientation == "south":
                y+=1
            
    return {"x":x, "y": y, "orientation":orientation}

#def move_robot(initial, instructions, orientation):
result = move_robot(7,3, "RAALAL","north" )
print(result)
