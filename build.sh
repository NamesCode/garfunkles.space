#!/usr/bin/env sh

### -- INITIALISATION STAGE --

# Exit on fail
set -e

# Create the build directory, clearing the old one
rm -rf build; mkdir -p build

## -- Server root --
echo "Copying to site root..."

# Copy all files in the root of src/pages (not directories) into build/
find src -maxdepth 1 -type f | while read -r file; do
  # Extract the filename
  filename=$(basename "$file")
  
  # Copy the file to the build directory
  cp "$file" "build/$filename"

  echo "Copied $file -> build/$filename"
done


### -- RENDER STAGE --

## -- Velox --
echo "Building Vel pages..."

# Find all .vtml files in src/pages recursively
# find src/pages -type f -name "*.vtml" | while read -r file; do
find src/pages -type f -name "*.html" | while read -r file; do
  # Remove the "src/pages/" prefix to get the relative path
  relative_path="${file#src/pages/}"

  # Generate the output path in the build directory (preserving structure)
  # output="build/${relative_path%.vtml}.html"
  output="build/${relative_path%.html}.html"

  # Ensure the output directory exists
  mkdir -p "$(dirname "$output")"

  # Process the file with velox and output to the build directory
  ./velox -c ./src/components "$file" > "$output"

  echo "Built $file -> $output"
done

# ## -- SCSS --
# echo "Building SCSS..."
#
# # Find all .scss files in src/css recursively
# find src/css -type f -name "*.scss" | while read -r file; do
#   # Extract the filename from the path
#   filename=$(basename "$file")
#
#   # Generate the output path in the build directory
#   output="build/css/${filename%.scss}.css"
#
#   # Process the file with the sass cli and output to the build directory
#   sass "$file" "$output"
#
#   echo "Built $file -> $output"
# done
