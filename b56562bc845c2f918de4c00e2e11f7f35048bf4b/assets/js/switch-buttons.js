	<!-- Wenn Button Alle gedrückt wird, Inhalt anzeigen -->
	function showAll() 
	{
		
		var b = document.getElementById("Migrationen");
		var c = document.getElementById("Installationen");
		var d = document.getElementById("Weiteres");
		
		b.style.display = "block";
		b.style.width = "33%";
		b.style.height = "500px";
		c.style.display = "block";
		c.style.width = "33%";
		c.style.height = "500px";
		d.style.display = "block";
		d.style.width = "33%";
		d.style.height = "500px";
		
		<!-- alert('Alle'); -->
	}
					
	<!-- Wenn Button Migrationen gedrückt wird, Inhalt anzeigen -->
	function showMigrationen() 
	{
	
		var f = document.getElementById("Migrationen");
		var g = document.getElementById("Installationen");
		var h = document.getElementById("Weiteres");
		
		f.style.display = "block";
		f.style.width = "100%";
		f.style.height = "100%";
		g.style.display = "none";
		h.style.display = "none";
		
		<!-- alert('Migrationen'); -->
	}
	
	<!-- Wenn Button Installationen gedrückt wird, Inhalt anzeigen -->
	function showInstallationen() 
	{
	
		var j = document.getElementById("Migrationen");
		var k = document.getElementById("Installationen");
		var l = document.getElementById("Weiteres");
		
		j.style.display = "none";
		k.style.display = "block";
		k.style.width = "100%";
		k.style.height = "100%";
		l.style.display = "none";
		
		<!-- alert('Installationen'); -->
	}
	
	<!-- Wenn Button Weiteres gedrückt wird, Inhalt anzeigen -->
	function showWeiteres() 
	{
		
		var n = document.getElementById("Migrationen");
		var o = document.getElementById("Installationen");
		var p = document.getElementById("Weiteres");
		
		n.style.display = "none";
		o.style.display = "none";
		p.style.display = "block";
		p.style.width = "100%";
		p.style.height = "100%";
		
		<!-- alert('Weiteres'); -->
	}