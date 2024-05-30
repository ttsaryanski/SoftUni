function search() {

   let count = 0;
   let searchStr = document.getElementById('searchText').value;

   let targets = document.querySelectorAll('li');
   for (const target of targets) {
      if (target.textContent.includes(searchStr)) {
         count++;
         target.style.fontWeight = 'bold';
         target.style.textDecoration = 'underline'
      }
      
   }

   let result = document.getElementById('result');
   result.textContent = `${count} matches found`
   
}
