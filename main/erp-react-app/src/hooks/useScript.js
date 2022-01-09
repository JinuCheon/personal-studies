import { useEffect } from 'react';

const scripts = [
  './assets/vendor_components/jquery-3.3.1/jquery-3.3.1.js',
  './assets/vendor_components/screenfull/screenfull.js',
  './assets/vendor_components/popper/dist/popper.min.js',
  './assets/vendor_components/bootstrap/dist/js/bootstrap.min.js',
  './assets/vendor_components/datatable/datatables.min.js',
  './assets/vendor_components/jquery-slimscroll/jquery.slimscroll.min.js',
  './assets/vendor_components/fastclick/lib/fastclick.js',
  './assets/vendor_components/jquery-sparkline/dist/jquery.sparkline.js',
  './assets/vendor_components/jquery.peity/jquery.peity.js',
  './assets/js/template.js',
  './assets/js/demo.js',
  './assets/js/pages/data-table.js',
  './assets/js/pages/app-ticket.js'
]

const useScript = () => {
  useEffect(() => {
    scripts.forEach((value) => {
      const script = document.createElement('script');
      script.src = value;
      script.async = true;
      document.body.appendChild(script);
    });
    //  return () => {
    //     document.body.removeChild(script);
    //  };
  }, []);
};

export default useScript;
