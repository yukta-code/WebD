import cv2
import numpy as np
from matplotlib import pyplot as plt

cap = cv2.VideoCapture(0)

while( cap.isOpened()) :
    ret, frame = cap.read()
    if ret == True:

        img = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        edges = cv2.Canny(img,100,200)
        cv2.imshow("edges", edges)

        if cv2.waitKey(1) == ord("q"):
            break
    else:
        break
cap.release()
cv2.destroyAllWindows()