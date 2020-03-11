---
layout: full-width
title: Liquibase Live Demo
includeDaticalBox: true
extraStyleSheets:
  - 2-col-landing-page
extraJavascriptFiles:
  - tracking-codes/hotjar.js
---

<div class="landing-page">
  <div class="landing-page__main-content span-12">
    <div class="landing-page__main-content__title">
      <div class="landing-page__main-content__title__icon">
        <img src="images/demo/downlink.png" alt="download to computer icon">
      </div>
      <h1 style="margin-top: 24px">On-Demand Demo</h1>
    </div>
    <div class="landing-page__main-content__text">
      Learn key concepts and see Liquibase in action with this on-demand demonstration.
    </div>
  </div>
  <div class="landing-page__cta-block span-10 push-2">
    <script src="//app-ab14.marketo.com/js/forms2/js/forms2.min.js"></script>
    <form id="mktoForm_3661"></form>
    <script>MktoForms2.loadForm("//app-ab14.marketo.com", "522-INH-443", 3661);</script>
    <script async src="https://marketo.clearbit.com/assets/v1/marketo/forms.js"
      data-clearbit-publishable-key="pk_a7c07aac0af9ac5ec657ff5f9ab23f4a"></script>
    <script>MktoForms2.whenReady(function(form) {
 
      form.submittable(false);

      let clearbitPolling = false;

      form.onValidate(function(valid) {
        let values = form.getValues();
        if(clearbitPolling || !valid) {
          return form.submittable(false);
        } else {
          if(valid && values.clearbitFormStatus && values.clearbitFormStatus !== "") {
            return form.submittable(true);
        }
        else {
        clearbitPolling = true;
 
        let start = Date.now();
        let poll = setInterval(function() {
          if(form.getValues().clearbitFormStatus && form.getValues().clearbitFormStatus !== "") {
            clearInterval(poll);
            clearbitPolling = false;
          } else {
            if (Date.now() - start > 2000) {
              form.setValues({
                clearbitFormStatus: "not Enriched"
              })
            }
          }
        },100)
      }
    }
  })
})
</script> 
    <style>
      form#mktoForm_3661 {
        width: 100% !important;
        background: none !important;
        padding: 0 !important;
      }

      form#mktoForm_3661 input.mktoField:not([type=checkbox]) {
        width: 100% !important;
      }

      .mktoFormCol {
        width: 100% !important;
      }

      .mktoFieldWrap {
        width: 100% !important;
      }

      .mktoLogicalField {
        width: 100% !important;
      }

      .mktoForm .mktoOffset {
        height: 0;
      }
    </style>
  </div>
</div>
