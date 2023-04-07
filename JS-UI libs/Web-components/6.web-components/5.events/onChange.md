how to signal that textContent has changed? 

onchange property (study-fields mixin)

      <mdc-textfield
            label="Bp"
            id="Bp"
            name="Bp"
            type="text"
            value=""
            
            onchange = "{{onChange}}"
            data-study = "{{study}}"
            disabled = "[[!_canEditDemographics]]"    
            dynamic-width
            required> 
        </mdc-textfield>




datalist - remove "age unit" into label

