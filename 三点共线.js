// 公式：
// k1 = (p2.y - p1.y)/(p2.x - p1.x)
// k2 = (q.y - p1.y)/(q.x - p1.x)

// 如果k1 === k2就表示三点共线

function isOnLine(p1, p2, q) {
  return (p2.y - p1.y) / (p2.x - p1.x) === (q.y - p1.y) / (q.x - p1.x);
}
