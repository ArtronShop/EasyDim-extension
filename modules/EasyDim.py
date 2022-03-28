from machine import Pin, I2C
import os

machine = os.uname().machine
if ("KidBright32" in machine) or ("KidMotor V4" in machine):
    i2c1 = I2C(1, scl=Pin(5), sda=Pin(4), freq=400000)
elif "Mbits" in machine:
    i2c1 = I2C(0, scl=Pin(21), sda=Pin(22), freq=400000)
else:
    i2c1 = I2C(0, scl=Pin(22), sda=Pin(21), freq=400000)

def write(value, addr=0x10):
    if value > 100:
        value = 100
    if value < 0:
        value = 0
    try:
        i2c1.writeto(addr, bytes([ value ]))
    except:
        print("Error, EasyDim write fail")
