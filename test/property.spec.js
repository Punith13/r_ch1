import React from 'react'; 
import Results from '../src/components/Results/ResultsContainer'; 
import SavedProperties from '../src/components/SavedProperties/SavedPropertiesContainer';
import {INITIAL_RESULTS_DATA} from '../src/backendResultData'; 
import {INITIAL_SAVED_PROPERTIES_DATA } from'../src/backendSavedPropertyData'; 
import * as ActionTypes from '../src/components/ActionTypes';

import store from '../src/store'; 

describe('REA UI Challenge Test Suite', () => {

    const props = {
        seed: ActionTypes.GET_INITIAL_RESULTS_DATA,
        category: 'Results',
        buttonActionType: 'Add',
        buttonClass: 'btn add',
        buttonName : 'Add Property',
        store : store
      };

    const results = mount( <Results {...props} />);

    const initialResultsDataLength = INITIAL_RESULTS_DATA.length;

    it(`Results to be loaded with ${initialResultsDataLength} Cards` , () => {

        expect(results.find('.cardComponent')).to.have.length(initialResultsDataLength);

    }); 

    const savedProps = {
        seed: ActionTypes.GET_INITIAL_SAVED_PROPERTIES_DATA,
        category: 'Saved Properties',
        buttonActionType: 'Remove',
        buttonClass: 'btn remove',
        buttonName : 'Remove Property',
        store : store
    }

    const savedPropertiesData = INITIAL_SAVED_PROPERTIES_DATA.length; 
    
    const savedProperties = mount( <SavedProperties {...savedProps} />); 

    it(`Saved Properties to be loaded with ${savedPropertiesData} Card` , () => {
        
        expect(savedProperties.find('.cardComponent')).to.have.length(savedPropertiesData);
        
    }); 

    it('Simulates Saving a property by clicking on Add Property Button on a Result Card  and checking for increase in Saved Properties Length' , () => {


        results.find('.cardComponent').first().simulate('mouseEnter');
        results.find('.cardComponent').first().find('.btn .add').simulate('click');

        expect(savedProperties.find('.cardComponent')).to.have.length(savedPropertiesData + 1);

    }); 


    it('Simulates Removing a property by clicking on Remove Property Button on a Saved Property Card and checking for decrease in Saved Properties Length' , () => {
        
        
        savedProperties.find('.cardComponent').first().simulate('mouseEnter');
        savedProperties.find('.cardComponent').first().find('.btn .remove').simulate('click');
        
        expect(savedProperties.find('.cardComponent')).to.have.length(savedPropertiesData);
        
    }); 

  });