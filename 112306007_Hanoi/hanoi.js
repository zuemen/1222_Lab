// Initialize arrays for three poles
const sourcePole = [3,2,1];
const auxiliaryPole = [];
const targetPole = [];

// Function: Move disks in the Hanoi Tower
function hanoiTower(n, source, auxiliary, target) {
    
    if (n === 0) {

        return;
    }
 
    if (n === 1) {
      // Move a single disk from the source pole to the target pole
      target.push(source.pop());
      displayState();
      return;
    }
  hanoiTower(n - 1,source,target,auxiliary);
  target.push(source.pop());
  displayState();
  hanoiTower(n - 1,auxiliary,source,target);
}
    // Here is your HW !\
    // Hint : Check the concept of recursive
    
    // 1. Move n-1 disks from the source pole to the auxiliary pole using the target pole as a temporary pole
    
    
    // 2. Move the remaining disk from the source pole to the target pole
  
  
    // 3. Move n-1 disks from the auxiliary pole to the target pole using the source pole as a temporary pole
    
  
  
  
  
  // Function: Display the current state on the web page
  function displayState() {
    document.getElementById('output').innerHTML += `
      <p>A: ${sourcePole.join(', ')}</p>
      <p>B: ${auxiliaryPole.join(', ')}</p>
      <p>C: ${targetPole.join(', ')}</p>
      <hr>
    `;
  }
  

  
  // Display the initial state
  displayState();
  
  // Solve the Hanoi Tower problem
  hanoiTower(sourcePole.length, sourcePole, auxiliaryPole, targetPole);