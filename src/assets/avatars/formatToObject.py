# Function to convert the pastebin format to a javascript object for the avatar list
# Pastebin Reference: https://pastebin.com/1WD5p1Xf

def formatToObject():
    # Open the file
    read_file = open("./pastebin.txt", "r")
    write_file = open("./avatarData.ts", "w")
    append_file = open("./avatarData.ts", "a")

    # Add the initial text to the file
    write_file.write("const avatarData = [\n{\n\t")

    last_category = ""
    current_category = ""

    # Loop through the file
    for line in read_file:
        # There are some empty lines, so we need to skip them
        if line.startswith(' '): 
            continue

        # Remove the last 4 character, which is the newline and the number
        line = line[:-4]

        # Check if the line is a category
        if not line.startswith("https"):
            # Add the category to the file
            current_category = line

            # Check if it is a new category and add the closing brackets
            if current_category != last_category:
                append_file.write(']\n},\n{\n\tcategory: "' + current_category + '",\n\tavatars: [\n\t\t')

            # Set the last category
            last_category = current_category

        # Add the avatars to the file
        else:
            append_file.write('"' + line + '",\n\t\t')


    append_file.write("}\n];\nexport default avatarData;")
    
formatToObject()
