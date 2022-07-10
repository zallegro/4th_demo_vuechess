variable "region" {
  default = "us-east-1"
}
#DocumentDB vars definition
variable "name" {
  default = "documentdb-test"
}

variable "docdb_instance_class" {
  default = "db.t3.medium"
}

variable "docdb_password" {
 description = "Database administrator password"
  type        = string
  sensitive   = true
  default     = "Passw0rd77"
}

#EBS vars definition

variable "elasticapp" {
  default = "myapp"
}
variable "beanstalkappenv" {
  default = "myenv"
}
