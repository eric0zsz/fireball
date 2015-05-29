
# fireball-build 0.4.0

Fireball is the game engine for the future.

### `Intersection` Class


Defined in: [utils/api/core/intersection.js:4](../files/utils/api/core/intersection.js.js)

Module: [Fire](../modules/Fire.md)




 

### Index



##### Methods

  - [`lineLine(a1, a2, b1, b2)`](#method-linelinea1-a2-b1-b2)
  - [`linePolygon(a1, a2, b)`](#method-linepolygona1-a2-b)
  - [`lineRect(a1, a2, b)`](#method-linerecta1-a2-b)
  - [`polygonPolygon(a, b)`](#method-polygonpolygona-b)
  - [`rectPolygon(a, b)`](#method-rectpolygona-b)
  - [`rectRect(a, b)`](#method-rectrecta-b)





### Details




<!-- Method Block -->
#### Methods


##### method: `lineLine(a1, a2, b1, b2)`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/intersection.js:11](../files/utils_api_core_intersection.js.md#l11) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- a1 <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  
- a2 <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  
- b1 <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  
- b2 <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  


##### method: `linePolygon(a1, a2, b)`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/intersection.js:70](../files/utils_api_core_intersection.js.md#l70) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- a1 <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  
- a2 <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  
- b Polygon  


##### method: `lineRect(a1, a2, b)`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/intersection.js:40](../files/utils_api_core_intersection.js.md#l40) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- a1 <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  
- a2 <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  
- b <a href="../classes/Vec2.html" class="crosslink">Vec2</a>  


##### method: `polygonPolygon(a, b)`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/intersection.js:166](../files/utils_api_core_intersection.js.md#l166) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- a Polygon  
- b Polygon  


##### method: `rectPolygon(a, b)`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/intersection.js:117](../files/utils_api_core_intersection.js.md#l117) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- a <a href="../classes/Rect.html" class="crosslink">Rect</a>  
- b Polygon  


##### method: `rectRect(a, b)`



| meta | description |
|------|-------------|
| Defined | [utils/api/core/intersection.js:92](../files/utils_api_core_intersection.js.md#l92) |
| Return 		 | <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean" class="crosslink external" target="_blank">Boolean</a> 

###### Parameters
- a <a href="../classes/Rect.html" class="crosslink">Rect</a>  
- b <a href="../classes/Rect.html" class="crosslink">Rect</a>  



