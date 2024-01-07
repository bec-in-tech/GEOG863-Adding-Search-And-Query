# GEOG863: Adding Search & Query to a US Wildfires Map 


<b>Project Description:</b><br>
<b>"US Wildfire Map with Search and Query Functionality"</b>

This project aims to provide an interactive and informative map visualization of wildfires across the United States from the years 2000 to 2018. Leveraging the ArcGIS API for JavaScript, the map incorporates advanced features such as a Class Breaks Renderer for dynamically categorizing wildfire sizes, a search widget for querying specific wildfire incidents, and a legend for enhanced map interpretation.

<b>Key Features and Components:</b>

1. Basemap and Scene View: The project starts by creating a new Map instance with a dark-gray basemap and world elevation ground. A SceneView is initialized with a predefined camera position, heading, and tilt, providing users with an immersive three-dimensional view.

2. Class Breaks Renderer: A Class Breaks Renderer is defined for the feature layer, dynamically categorizing wildfires based on the size in acres. The renderer employs different colors to represent distinct size ranges, enhancing the visual representation of the data.

3. Popup Template: A popup template is defined for the feature layer, offering detailed information about each wildfire incident. The template includes fields such as incident name, state, fire year, acres burned, and the land agency responsible.

4. Search Widget: A Search widget is integrated into the map, enabling users to search for specific wildfire incidents by name. The widget is configured to search for incident names within the feature layer, providing a user-friendly way to explore and locate relevant information.

5. User Interaction: The project prompts users to enter a fire year between 2000 and 2018, dynamically filtering the displayed wildfires based on the chosen year. This interactive element allows users to explore the history of wildfires for a specific time period.

6. Legend Widget: A Legend widget is created to serve as a key for interpreting the color-coded representation of wildfires based on their size. The legend is positioned in the bottom-left corner of the map view for easy reference.

7. Map Display: The feature layer, configured with the Class Breaks Renderer, popup template, and year-specific query, is added to the map display. This layer showcases wildfires across the United States, providing a comprehensive view of historical fire incidents.

8. Enhanced User Interface: The search widget is strategically placed in the top-right corner, while the legend widget is positioned in the bottom-left corner, contributing to an organized and user-friendly interface.

Overall, this project delivers an engaging and interactive USA Wildfire Map, allowing users to explore and query wildfire incidents based on various parameters. The integration of search functionality, dynamic rendering, and informative popups enhances the overall user experience, making it an invaluable tool for understanding and analyzing wildfire data.

![image](https://github.com/bec-in-tech/GEOG863-Adding-Search-And-Query/assets/120440399/f5e551fc-757c-4151-9b13-c45f14a1be66)

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="BaqNaYX" data-user="rmu5072" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rmu5072/pen/BaqNaYX">
  Lesson 7 Assignment - Wildfires</a> by Rebecca U (<a href="https://codepen.io/rmu5072">@rmu5072</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
