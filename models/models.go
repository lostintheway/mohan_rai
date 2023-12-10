package models

type Mohan struct {
	ID      int `gorm:"primaryKey;autoIncrement"`
	Title   string
	Content string
	Status  int // Status field can holds integer values and 0 is a valid integer
	Type    string
}

// sql query to remove index from a column
// alter table mohanrai drop index title
