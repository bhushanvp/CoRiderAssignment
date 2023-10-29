#!/bin/bash

read input_string < /dev/stdin


masked_string="${input_string//[0-9]/\*}"

echo "$masked_string"
