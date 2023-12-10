package models

type Mohan struct {
	ID      int `gorm:"primaryKey;autoIncrement"`
	Title   string
	Content string
	Status  int    `gorm:"index"`
	Type    string `gorm:"index"`
}
