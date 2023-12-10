package utils

import (
	"regexp"
	"strings"
)

// RefactorFileName refactors a file name based on certain rules.
func RefactorFileName(fileName string) string {
	// Convert to lowercase
	fileName = strings.ToLower(fileName)

	// Remove special characters except '.'
	reg, _ := regexp.Compile("[^a-zA-Z0-9_.]+")
	fileName = reg.ReplaceAllString(fileName, "")

	// Replace spaces with underscores
	fileName = strings.ReplaceAll(fileName, " ", "_")

	// If length is above 15 characters, delete all after, keeping file extension
	if len(fileName) > 15 {
		// thorw error bad request long fileName
		// http.Error(w, "bad request long fileName", http.StatusBadRequest)

		fileName = fileName[:11] + fileName[len(fileName)-5:]
	}

	return fileName
}
