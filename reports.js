(function () {
  function polarToCartesian(cx, cy, radius, angleDeg) {
    var angleRad = (angleDeg * Math.PI) / 180;
    return {
      x: cx + (radius * Math.cos(angleRad)),
      y: cy + (radius * Math.sin(angleRad))
    };
  }

  function describeSectorPath(cx, cy, radius, startAngle, endAngle) {
    var start = polarToCartesian(cx, cy, radius, startAngle);
    var end = polarToCartesian(cx, cy, radius, endAngle);
    var largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

    return [
      'M', cx, cy,
      'L', start.x, start.y,
      'A', radius, radius, 0, largeArcFlag, 1, end.x, end.y,
      'Z'
    ].join(' ');
  }

  function parsePercent(text) {
    var match = String(text || "").match(/-?\d+(?:\.\d+)?/);
    return match ? Math.max(0, Number(match[0])) : 0;
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function renderRiskChart() {
    var chart = document.querySelector('.risk-chart');
    if (!chart) {
      return;
    }

    var highNode = document.querySelector('.text-wrapper-14');
    var moderateNode = document.querySelector('.text-wrapper-15');
    var lowNode = document.querySelector('.text-wrapper-16');

    if (!highNode || !moderateNode || !lowNode) {
      return;
    }

    var high = parsePercent(highNode.textContent);
    var moderate = parsePercent(moderateNode.textContent);
    var low = parsePercent(lowNode.textContent);
    var total = high + moderate + low;

    if (!total) {
      chart.style.background = '#e5e7eb';
      chart.setAttribute('aria-label', 'Risk distribution pie chart with no data');
      return;
    }

    var highPct = clamp((high / total) * 100, 0, 100);
    var moderatePct = clamp((moderate / total) * 100, 0, 100);
    var lowPct = clamp(100 - highPct - moderatePct, 0, 100);

    var slices = [
      { value: highPct, color: '#e20613' },
      { value: moderatePct, color: '#f0d600' },
      { value: lowPct, color: '#4ce80f' }
    ];

    var startAngle = -90;
    var paths = '';
    slices.forEach(function (slice) {
      if (slice.value <= 0) {
        return;
      }

      var endAngle = startAngle + (slice.value * 3.6);
      paths += '<path d="' + describeSectorPath(50, 50, 49, startAngle, endAngle) +
        '" fill="' + slice.color + '" stroke="#ffffff" stroke-width="1.8" stroke-linejoin="round" />';
      startAngle = endAngle;
    });

    chart.innerHTML = '<svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">' + paths + '</svg>';

    chart.setAttribute(
      'aria-label',
      'Risk distribution pie chart: High Risk ' + high + ' percent, Moderate ' + moderate + ' percent, Low Risk ' + low + ' percent'
    );
  }

  function initRiskChartObserver() {
    var targets = [
      document.querySelector('.text-wrapper-14'),
      document.querySelector('.text-wrapper-15'),
      document.querySelector('.text-wrapper-16')
    ].filter(Boolean);

    if (!targets.length) {
      return;
    }

    var observer = new MutationObserver(renderRiskChart);
    targets.forEach(function (target) {
      observer.observe(target, {
        childList: true,
        characterData: true,
        subtree: true
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var generateBtn = document.getElementById('generate-report-btn');
    if (generateBtn) {
      generateBtn.addEventListener('click', function () {
        window.print();
      });
    }

    renderRiskChart();
    initRiskChartObserver();
  });
})();
