#!/bin/bash

aws ec2 run-instances \
  --image-id ami-05d2d839d4f73aafb \
  --count 1 \
  --instance-type t3.micro \
  --key-name vccA3 \
  --security-group-ids sg-041274b2e7e6748b3 \
  --region ap-south-1 \
  --user-data file:///home/amitesh/project/aws/deploy.sh
