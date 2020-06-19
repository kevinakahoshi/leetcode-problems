// @param {number []} height
// @return {number}

const maxVolume = height => {
  let front = 0;
  let rear = height.length - 1;
  let volume = 0;

  while (front < rear) {
    if (height[front] < height[rear]) {
      volume = Math.max(volume, height[front] * (rear - front));
      front++;
    } else {
      volume = Math.max(volume, height[rear] * (rear - front));
      rear--;
    }
  }

  return volume;
};

export default maxVolume;
