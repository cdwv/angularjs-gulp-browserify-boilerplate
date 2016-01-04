'use strict';

function ArrayToListFilter($sce) {
  'ngInject';
  
  return (input) => {

    if(input && input.join) {
        return $sce.trustAsHtml('<ul class="blocks"><li>' + input.join('</li><li>') + '</li></ul>');
    }

    return input;
  };

}

export default {
  name: 'ArrayToListFilter',
  fn: ArrayToListFilter
};