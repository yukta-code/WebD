#import package
import cv2
import sys

#read the image
img = cv2.imread("puppy.jpg")

# sys.exit() if none
if img.all() == None:
    sys.exit("No image found")

#print image 
print (img)

#bgr to rgb
b, g, r = cv2.split(img)
rgb_img = cv2.merge([r, g, b])

#display image
cv2.imshow("display_window", rgb_img)
#wait and destroy window
k = cv2.waitKey(0)
if k == ord("s"):
    cv2.imwrite("puppy2.jpg", rgb_img)
cv2.destroyAllWindows()
