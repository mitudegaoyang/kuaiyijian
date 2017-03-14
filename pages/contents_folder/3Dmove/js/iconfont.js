;(function(window) {

    var svgSprite = '<svg>' +
        ''+
        '<symbol id="icon-musicoff" viewBox="0 0 1024 1024">'+
        ''+
        '<path d="M512 64C264.577 64 64 264.576 64 512s200.577 448 448 448c247.423 0 448-200.576 448-448S759.423 64 512 64zM674.747 897.287c-25.222 10.668-51.614 18.859-78.447 24.351-27.548 5.638-55.91 8.495-84.3 8.495-28.389 0-56.752-2.857-84.3-8.495-26.833-5.491-53.226-13.684-78.447-24.351-24.77-10.477-48.663-23.445-71.015-38.547-22.147-14.962-42.974-32.146-61.903-51.075-18.929-18.929-36.114-39.757-51.076-61.903-15.101-22.352-28.07-46.244-38.546-71.015-10.667-25.221-18.861-51.614-24.351-78.447-5.637-27.548-8.496-55.911-8.496-84.3 0-28.389 2.858-56.752 8.496-84.3 5.491-26.833 13.684-53.226 24.351-78.447 10.477-24.77 23.445-48.663 38.546-71.015 12.181-18.03 25.836-35.186 40.705-51.155L487.101 508.22l0 88.649c-5.236-2.093-13.35-4.361-24.344-6.803-10.994-2.443-23.471-3.402-37.431-2.88-13.96 0.523-28.444 3.402-43.452 8.638-15.008 5.234-28.969 14.48-41.882 27.74-12.913 13.262-19.457 27.48-19.631 42.66-0.175 15.179 4.274 29.137 13.349 41.874 9.075 12.736 21.901 23.293 38.479 31.668 16.579 8.374 35.163 12.038 55.754 10.993 20.243-1.049 37.17-4.799 50.781-11.257 13.613-6.454 24.519-14.218 32.72-23.29 8.202-9.074 13.787-18.757 16.754-29.051 2.966-10.295 4.273-19.63 3.926-28.004l0-29.836 0-53.389c0-7.389 0.012-14.942 0.035-22.656l264.758 264.758c-15.969 14.869-33.124 28.523-51.155 40.705C723.409 873.842 699.517 886.811 674.747 897.287zM897.287 674.747c-10.478 24.77-23.446 48.663-38.547 71.015-12.182 18.03-25.836 35.186-40.705 51.154L532.388 511.269c0.172-22.575 0.259-43.592 0.259-63.052l0-49.202 0-22.508c0-5.583 2.094-9.421 6.282-11.516 4.188-2.093 10.122 0.523 17.8 7.852 8.027 8.375 18.061 17.361 30.102 26.957 12.043 9.597 25.915 15.964 41.62 19.105 15.008 2.791 26.088 7.415 33.244 13.87 7.155 6.456 11.604 16.489 13.351 30.098 1.046 8.375 2.528 14.132 4.448 17.272 1.921 3.141 4.101 4.886 6.544 5.235 2.442 0.349 5.409-2.007 8.9-7.067 3.49-5.06 6.019-11.603 7.591-19.628 1.57-8.025 1.483-16.925-0.262-26.694-1.744-9.771-6.632-19.193-14.658-28.266-8.028-9.421-15.357-16.227-21.989-20.414-6.63-4.187-13.348-7.764-20.154-10.73s-14.136-6.193-21.987-9.683c-7.853-3.49-17.015-9.248-27.484-17.273-12.216-8.725-21.902-17.622-29.056-26.694-7.155-9.073-13.175-17.187-18.061-24.34-4.886-7.153-9.687-12.736-14.396-16.75-4.713-4.013-10.733-5.496-18.062-4.449-8.726 1.047-15.707 4.798-20.941 11.253-5.235 6.456-7.853 14.743-7.853 24.863-0.349 51.645-0.523 98.056-0.523 139.232l0 17.242L227.083 205.965c15.969-14.87 33.125-28.524 51.155-40.705 22.352-15.101 46.245-28.07 71.015-38.547 25.221-10.667 51.614-18.86 78.447-24.351 27.548-5.637 55.911-8.496 84.3-8.496 28.39 0 56.752 2.858 84.3 8.496 26.833 5.49 53.226 13.684 78.447 24.351 24.769 10.477 48.662 23.446 71.014 38.547 22.147 14.962 42.975 32.146 61.904 51.075 18.929 18.929 36.112 39.756 51.075 61.903 15.101 22.352 28.069 46.245 38.546 71.015 10.668 25.221 18.86 51.614 24.352 78.447 5.638 27.548 8.495 55.911 8.495 84.3 0 28.389-2.857 56.752-8.495 84.3C916.146 623.133 907.954 649.526 897.287 674.747z"  ></path>'+
        ''+
        '</symbol>'+
        ''+
        '<symbol id="icon-music1" viewBox="0 0 1024 1024">'+
        ''+
        '<path d="M687.608 403.725c-8.028-9.421-15.357-16.226-21.989-20.414-6.63-4.187-13.348-7.764-20.154-10.73-6.807-2.966-14.136-6.193-21.987-9.683-7.853-3.49-17.015-9.248-27.485-17.273-12.215-8.725-21.901-17.622-29.055-26.694-7.155-9.073-13.175-17.187-18.061-24.34-4.886-7.153-9.687-12.736-14.396-16.75-4.713-4.013-10.733-5.496-18.062-4.449-8.726 1.047-15.707 4.798-20.941 11.254-5.235 6.456-7.853 14.743-7.853 24.862-0.349 51.646-0.523 98.056-0.523 139.232l0 148.129c-5.235-2.093-13.35-4.361-24.344-6.803-10.994-2.443-23.47-3.402-37.431-2.88-13.961 0.523-28.445 3.402-43.453 8.638-15.008 5.234-28.968 14.48-41.882 27.74-12.914 13.262-19.457 27.48-19.631 42.66-0.175 15.179 4.274 29.137 13.349 41.875 9.074 12.735 21.9 23.292 38.479 31.667 16.579 8.374 35.163 12.038 55.754 10.993 20.244-1.049 37.17-4.799 50.781-11.256 13.612-6.455 24.518-14.218 32.72-23.291 8.202-9.074 13.786-18.757 16.753-29.051 2.967-10.295 4.274-19.63 3.927-28.004l0-29.835 0-53.39c0-20.239 0.086-41.701 0.262-64.382 0.174-22.683 0.262-43.794 0.262-63.335l0-49.203 0-22.507c0-5.583 2.093-9.421 6.282-11.516 4.188-2.093 10.121 0.523 17.799 7.852 8.027 8.375 18.061 17.36 30.103 26.957 12.043 9.597 25.914 15.964 41.619 19.105 15.008 2.791 26.089 7.415 33.244 13.87 7.155 6.456 11.604 16.488 13.351 30.098 1.047 8.375 2.528 14.132 4.449 17.272 1.92 3.141 4.101 4.886 6.543 5.235 2.443 0.349 5.409-2.007 8.901-7.067 3.49-5.06 6.019-11.604 7.59-19.629s1.483-16.924-0.261-26.694C700.522 422.22 695.635 412.798 687.608 403.725z"  ></path>'+
        ''+
        '<path d="M512 64C264.576 64 64 264.576 64 512s200.576 448 448 448c247.423 0 448-200.576 448-448S759.423 64 512 64zM897.287 674.747c-10.478 24.77-23.446 48.663-38.547 71.015-14.962 22.146-32.146 42.975-51.075 61.903-18.93 18.929-39.757 36.113-61.904 51.075-22.352 15.102-46.244 28.07-71.014 38.547-25.222 10.668-51.615 18.859-78.447 24.351-27.548 5.638-55.911 8.495-84.3 8.495-28.389 0-56.752-2.857-84.3-8.495-26.833-5.491-53.226-13.683-78.447-24.351-24.77-10.477-48.663-23.445-71.015-38.547-22.147-14.962-42.975-32.146-61.903-51.075s-36.113-39.757-51.075-61.903c-15.101-22.352-28.07-46.244-38.546-71.015-10.668-25.221-18.861-51.614-24.351-78.446-5.637-27.549-8.496-55.912-8.496-84.301 0-28.389 2.858-56.752 8.496-84.3 5.491-26.833 13.683-53.227 24.351-78.447 10.477-24.77 23.445-48.663 38.546-71.015 14.962-22.147 32.146-42.975 51.075-61.903s39.756-36.113 61.903-51.075c22.352-15.101 46.245-28.069 71.015-38.546 25.221-10.667 51.614-18.861 78.447-24.351 27.548-5.637 55.911-8.496 84.3-8.496 28.389 0 56.752 2.858 84.3 8.496 26.832 5.491 53.226 13.684 78.447 24.351 24.769 10.477 48.662 23.445 71.014 38.546 22.147 14.962 42.975 32.146 61.904 51.075 18.929 18.929 36.112 39.756 51.075 61.903 15.101 22.352 28.069 46.245 38.546 71.015 10.668 25.221 18.86 51.614 24.352 78.447 5.638 27.548 8.495 55.911 8.495 84.3 0 28.389-2.857 56.752-8.495 84.301C916.146 623.133 907.954 649.526 897.287 674.747z"  ></path>'+
        ''+
        '</symbol>'+
        ''+
        '</svg>'
    var script = function() {
        var scripts = document.getElementsByTagName('script')
        return scripts[scripts.length - 1]
    }()
    var shouldInjectCss = script.getAttribute("data-injectcss")

    /**
     * document ready
     */
    var ready = function(fn){
        if(document.addEventListener){
            document.addEventListener("DOMContentLoaded",function(){
                document.removeEventListener("DOMContentLoaded",arguments.callee,false)
                fn()
            },false)
        }else if(document.attachEvent){
            IEContentLoaded (window, fn)
        }

        function IEContentLoaded (w, fn) {
            var d = w.document, done = false,
                // only fire once
                init = function () {
                    if (!done) {
                        done = true
                        fn()
                    }
                }
                // polling for no errors
                ;(function () {
                try {
                    // throws errors until after ondocumentready
                    d.documentElement.doScroll('left')
                } catch (e) {
                    setTimeout(arguments.callee, 50)
                    return
                }
                // no errors, fire

                init()
            })()
            // trying to always fire before onload
            d.onreadystatechange = function() {
                if (d.readyState == 'complete') {
                    d.onreadystatechange = null
                    init()
                }
            }
        }
    }

    /**
     * Insert el before target
     *
     * @param {Element} el
     * @param {Element} target
     */

    var before = function (el, target) {
        target.parentNode.insertBefore(el, target)
    }

    /**
     * Prepend el to target
     *
     * @param {Element} el
     * @param {Element} target
     */

    var prepend = function (el, target) {
        if (target.firstChild) {
            before(el, target.firstChild)
        } else {
            target.appendChild(el)
        }
    }

    function appendSvg(){
        var div,svg

        div = document.createElement('div')
        div.innerHTML = svgSprite
        svg = div.getElementsByTagName('svg')[0]
        if (svg) {
            svg.setAttribute('aria-hidden', 'true')
            svg.style.position = 'absolute'
            svg.style.width = 0
            svg.style.height = 0
            svg.style.overflow = 'hidden'
            prepend(svg,document.body)
        }
    }

    if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
        window.__iconfont__svg__cssinject__ = true
        try{
            document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
        }catch(e){
            console && console.log(e)
        }
    }

    ready(appendSvg)


})(window)
